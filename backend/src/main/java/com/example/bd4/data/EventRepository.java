package com.example.bd4.data;


import com.example.bd4.model.EventRequest;
import com.example.bd4.model.EventResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface EventRepository extends JpaRepository<EventResponse, Long> {

    @Query(value = "select * from get_possible_event(:city, :member)", nativeQuery = true)
    ArrayList<EventResponse> getPossibleEvent(@Param("city") String cityName, @Param("member") long memberId);

    @Query(value = "select * from get_event_in_city(:city)", nativeQuery = true)
    ArrayList<EventResponse> getEventsFromCity(@Param("city") String cityName);

    EventResponse findById(long id);
}
