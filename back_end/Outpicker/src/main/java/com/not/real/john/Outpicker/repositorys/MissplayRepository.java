package com.not.real.john.Outpicker.repositorys;

import com.not.real.john.Outpicker.models.MissPlay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MissplayRepository extends JpaRepository<MissPlay, Long> {

}
