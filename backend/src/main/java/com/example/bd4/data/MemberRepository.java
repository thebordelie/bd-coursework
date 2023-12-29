package com.example.bd4.data;

import com.example.bd4.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {


    @Query(value = "select verify_member(:userid)", nativeQuery = true)
    void verifyUser(@Param(value = "userid") long userid);

    @Query(value = "select * from member where verification = false", nativeQuery = true)
    ArrayList<Member> getNonVerifyUsers();

    ArrayList<Member> findAllById(long id);
}
