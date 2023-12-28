package com.example.bd4.service;

import com.example.bd4.data.CityRepository;
import com.example.bd4.data.UserJpaRepository;
import com.example.bd4.exception.BadUserDataException;
import com.example.bd4.model.AppUser;
import com.example.bd4.model.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.ArrayList;
import java.util.Base64;

@Service
public class AuthService {
    private final UserJpaRepository userJpaRepository;
    private final CityRepository cityRepository;

    @Autowired
    public AuthService(UserJpaRepository userJpaRepository, CityRepository cityRepository) {
        this.userJpaRepository = userJpaRepository;
        this.cityRepository = cityRepository;
    }

    public void registerNewUser(AppUser appUser) {
        if (appUser.getLogin().equals("") || appUser.getPassword().equals(""))
            throw new NumberFormatException("bad login");
        byte[] salt = createSalt();
        String strSalt = byteToString(salt);
        String hashPassword = byteToString(createHash(appUser.getPassword(), salt));
        appUser.setSalt(strSalt);
        appUser.setPassword(hashPassword);
        userJpaRepository.save(appUser);
    }

    public UserResponse authUser(String login, String password) {
        ArrayList<AppUser> users = userJpaRepository.findAppUserByLogin(login);
        for (AppUser user : users) {
            byte[] salt = stringToByte(user.getSalt());
            if (byteToString(createHash(password, salt)).equals(user.getPassword())) {
                String city = cityRepository.findCityByOKATO(user.getCityId()).getCityName();
                return new UserResponse(user.getId(), user.getFullName(), city, user.getRole());
            }
        }
        throw new BadUserDataException("invalid login or password");
    }

    private byte[] createSalt() {
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[6];
        random.nextBytes(salt);
        return salt;
    }

    private byte[] createHash(String password, byte[] salt) {
        try {
            KeySpec spec = new PBEKeySpec(password.toCharArray(), salt, 65536, 128);
            SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
            return factory.generateSecret(spec).getEncoded();
        } catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
            e.printStackTrace();
        }
        return null;

    }

    public String byteToString(byte[] hash) {
        return Base64.getEncoder().encodeToString(hash);
    }

    public byte[] stringToByte(String input) {
        return Base64.getDecoder().decode(input);
    }
}
