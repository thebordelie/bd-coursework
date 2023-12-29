package com.example.bd4.service;

import com.example.bd4.data.CityRepository;
import com.example.bd4.data.EventRepository;
import com.example.bd4.data.UserJpaRepository;
import com.example.bd4.exception.BadUserDataException;
import com.example.bd4.model.AppUser;
import com.example.bd4.model.City;
import com.example.bd4.model.Event;
import com.example.bd4.model.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MemberService {
    private final EventRepository eventRepository;
    private final CityRepository cityRepository;
    private final UserJpaRepository userJpaRepository;

    @Autowired
    public MemberService(EventRepository eventRepository, CityRepository cityRepository, UserJpaRepository userJpaRepository) {
        this.eventRepository = eventRepository;
        this.cityRepository = cityRepository;
        this.userJpaRepository = userJpaRepository;
    }

    public ArrayList<Event> getPossibleEvents(UserRequest userRequest) {
        ArrayList<AppUser> users = userJpaRepository.findAppUserById(userRequest.getId());
        if (users.size() == 0) throw new BadUserDataException("invalid user id");
        AppUser user = users.getFirst();
        String cityName = cityRepository.findCityByOKATO(user.getCityId()).getCityName();
        System.out.println(eventRepository.getPossibleEvent(cityName, userRequest.getId()));
        return eventRepository.getPossibleEvent(cityName, userRequest.getId());
    }

    public ArrayList<Event> getEventsInCity(City city) {
        String cityName = city.getCityName();
        return eventRepository.getEventsFromCity(cityName);
    }
}
