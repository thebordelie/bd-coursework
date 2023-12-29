package com.example.bd4.data;

import com.example.bd4.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface UserJpaRepository extends CrudRepository<AppUser, Long> {
    ArrayList<AppUser> findAppUserById(long id);

    ArrayList<AppUser> findAppUserByLogin(String login);

}
