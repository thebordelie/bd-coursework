package com.example.bd4.service;

import com.example.bd4.data.CityRepository;
import com.example.bd4.data.EventRepository;
import com.example.bd4.data.MemberRepository;
import com.example.bd4.data.UserJpaRepository;
import com.example.bd4.exception.BadUserDataException;
import com.example.bd4.exception.DeniedAccessException;
import com.example.bd4.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MemberService {
    private final EventRepository eventRepository;
    private final CityRepository cityRepository;
    private final UserJpaRepository userJpaRepository;
    private final JdbcTemplate jdbcTemplate;
    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(EventRepository eventRepository, CityRepository cityRepository, UserJpaRepository userJpaRepository, JdbcTemplate jdbcTemplate, MemberRepository memberRepository) {
        this.eventRepository = eventRepository;
        this.cityRepository = cityRepository;
        this.userJpaRepository = userJpaRepository;
        this.jdbcTemplate = jdbcTemplate;
        this.memberRepository = memberRepository;
    }

    public ArrayList<EventResponse> getPossibleEvents(UserRequest userRequest) {
        ArrayList<AppUser> users = userJpaRepository.findAppUserById(userRequest.getId());
        if (users.size() == 0) throw new BadUserDataException("invalid user id");
        AppUser user = users.getFirst();
        String cityName = cityRepository.findCityByOKATO(user.getCityId()).getCityName();
        System.out.println(eventRepository.getPossibleEvent(cityName, userRequest.getId()));
        return eventRepository.getPossibleEvent(cityName, userRequest.getId());
    }

    public ArrayList<EventResponse> getEventsInCity(City city) {
        String cityName = city.getCityName();
        return eventRepository.getEventsFromCity(cityName);
    }

    public List<Long> getUsersEvents(long userId) {
        List<EventToViewers> actors = this.jdbcTemplate.query(
                "select eventid, viewerid from eventtoviewers where viewerid = ?",
                (resultSet, rowNum) -> {
                    EventToViewers actor = new EventToViewers();
                    actor.setEventid(resultSet.getLong("eventid"));
                    actor.setUserid(resultSet.getLong("viewerid"));
                    return actor;
                }, userId);
        return actors.stream().map(EventToViewers::getEventid).toList();
    }

    public void addViewer(long eventId, long userId) {
        jdbcTemplate.update("insert into eventtoviewers values (?,?)", eventId, userId);
    }

    public void deleteViewer(long eventId, long userId) {
        jdbcTemplate.update("delete from eventtoviewers where eventid = ? and viewerid = ?", eventId, userId);
    }

    public void participateEvent(long eventId, long userId) {
        ArrayList<Member> members = memberRepository.findAllById(userId);
        String type = eventRepository.findById(eventId).getType();
        System.out.println(members);
        System.out.println(type);
        for (Member member: members) {
            if (member.getCompetitionType().equals(type)) {
                jdbcTemplate.update("insert into eventtomembers (eventid, memberid) values (?,?)", eventId, userId);
                return;
            }
        }
        throw new DeniedAccessException("Вы не верифицированы");

    }

    public List<Long> getMemberEvent(long userId) {
        List<EventToViewers> actors = this.jdbcTemplate.query(
                "select eventid, memberid from eventtomembers where memberid = ?",
                (resultSet, rowNum) -> {
                    EventToViewers actor = new EventToViewers();
                    actor.setEventid(resultSet.getLong("eventid"));
                    actor.setUserid(resultSet.getLong("memberid"));
                    return actor;
                }, userId);
        return actors.stream().map(EventToViewers::getEventid).toList();
    }

    public void addNewMember(Member member) {
        member.setReliability((short) 100);
        member.setVerification(false);
        memberRepository.save(member);
    }

    public void removeMemberFromEvent(long eventId, long userId) {
        jdbcTemplate.update("delete from eventtomembers where eventid = ? and memberid = ?", eventId, userId);
    }
}
