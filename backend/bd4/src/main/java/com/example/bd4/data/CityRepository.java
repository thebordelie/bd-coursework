package com.example.bd4.data;

import com.example.bd4.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

    City findCityByOKATO(long OKATO);
}
