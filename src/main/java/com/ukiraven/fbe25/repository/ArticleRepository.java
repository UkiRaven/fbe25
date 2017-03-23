package com.ukiraven.fbe25.repository;

import com.ukiraven.fbe25.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

/**
 * Created by lastc on 26.02.2017.
 */
public interface ArticleRepository extends PagingAndSortingRepository<Article, Long> {
    @Override
//    @PreAuthorize("@articleRepository.findOne(#id)?.author?.nickname == authentication?.name")
    void delete(@Param("id") Long id);

}
