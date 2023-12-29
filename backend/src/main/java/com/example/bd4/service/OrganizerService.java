package com.example.bd4.service;

import com.example.bd4.data.CityRepository;
import com.example.bd4.data.EventRepository;
import com.example.bd4.data.MemberRepository;
import com.example.bd4.data.UserJpaRepository;
import com.example.bd4.exception.DeniedAccessException;
import com.example.bd4.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.w3c.dom.events.Event;

import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class OrganizerService {
    private final EventRepository eventRepository;
    private final CityRepository cityRepository;
    private final JdbcTemplate jdbcTemplate;
    private final MemberRepository memberRepository;
    private final UserJpaRepository userJpaRepository;

    @Autowired
    public OrganizerService(EventRepository eventRepository, CityRepository cityRepository, JdbcTemplate jdbcTemplate, MemberRepository memberRepository, UserJpaRepository userJpaRepository) {
        this.eventRepository = eventRepository;
        this.cityRepository = cityRepository;
        this.jdbcTemplate = jdbcTemplate;
        this.memberRepository = memberRepository;
        this.userJpaRepository = userJpaRepository;
    }

    private long addPlace(String cityName, String place, String home) {
        long okato = cityRepository.findCityByCityName(cityName).getOKATO();
        jdbcTemplate.update("insert into eventplace (city, street, house) values (?,?,?)", okato, place, home);
        return jdbcTemplate.queryForObject("select id from eventplace where city=? and street = ? and house = ?", Long.class, okato, place, home);
    }

    public void addEvent(EventRequest event, long organizerId) {
        String role = jdbcTemplate.queryForObject("select role from appuser where id = ?", String.class, organizerId);
        assert role != null;
        if (!role.equals("Organizer")) throw new DeniedAccessException("Вы не организатор");
        long placeId = addPlace(event.getCity(), event.getStreet(), event.getHouse());
        jdbcTemplate.update("insert into event(type, organizer, city, date, place, name) values (?,?,?,?,?,?)", event.getType(), organizerId, cityRepository.findCityByCityName(event.getCity()).getOKATO(), event.getDate(), placeId, event.getName());
    }

    public void verifyUser(long userId) {
        memberRepository.verifyUser(userId);
    }

    public ArrayList<UserResponse> getUsers() {
        ArrayList<Member> members = memberRepository.getNonVerifyUsers();
        ArrayList<UserResponse> responses = new ArrayList<>();
        for (Member member : members) {
            UserResponse response = new UserResponse();
            response.setType(member.getCompetitionType());
            response.setId(member.getId());
            response.setFullName(getFullName(member.getId()));
            responses.add(response);
        }
        return responses;
    }

    public ArrayList<UserResponse> getUsersFromEvent(long eventId) {
        List<Long> viewers = getUsersEvents(eventId);
        List<Long> members = getMemberEvent(eventId);
        ArrayList<Long> id = new ArrayList<>();
        System.out.println(viewers);
        System.out.println(members);
        for (Long id1 : members) {
            id.add(id1);
        }
        for (Long id1 : viewers) {
            id.add(id1);
        }
        Set<Long> allId = new HashSet<>(id);
        ArrayList<UserResponse> responses = new ArrayList<>();
        ArrayList<AppUser> users = new ArrayList<>();
        for (long id1 : allId) {
            users.add(userJpaRepository.findAppUserById(id1).getFirst());
        }


        for (AppUser user : users) {
            UserResponse response = new UserResponse();
            response.setId(user.getId());
            response.setFullName(user.getFullName());
            responses.add(response);
        }
        return responses;
    }

    private String getFullName(long id) {
        return userJpaRepository.findAppUserById(id).getFirst().getFullName();
    }


    public List<Long> getUsersEvents(long eventid) {
        List<EventToViewers> actors = this.jdbcTemplate.query(
                "select eventid, viewerid from eventtoviewers where eventid = ?",
                (resultSet, rowNum) -> {
                    EventToViewers actor = new EventToViewers();
                    actor.setEventid(resultSet.getLong("eventid"));
                    actor.setUserid(resultSet.getLong("viewerid"));
                    return actor;
                }, eventid);
        return actors.stream().map(EventToViewers::getUserid).toList();
    }

    public List<Long> getMemberEvent(long eventid) {
        List<EventToViewers> actors = this.jdbcTemplate.query(
                "select eventid, memberid from eventtomembers where eventid = ?",
                (resultSet, rowNum) -> {
                    EventToViewers actor = new EventToViewers();
                    actor.setEventid(resultSet.getLong("eventid"));
                    actor.setUserid(resultSet.getLong("memberid"));
                    return actor;
                }, eventid);
        return actors.stream().map(EventToViewers::getUserid).toList();
    }


}
