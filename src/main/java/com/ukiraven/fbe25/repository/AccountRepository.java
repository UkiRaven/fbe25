package com.ukiraven.fbe25.repository;

import com.ukiraven.fbe25.entity.Account;
import com.ukiraven.fbe25.entity.Article;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by lastc on 05.03.2017.
 */
public interface AccountRepository extends CrudRepository<Account, Long> {



    Account findByNickname(String name);
}
