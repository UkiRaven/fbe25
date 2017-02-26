package com.ukiraven.fbe25.service;

import com.ukiraven.fbe25.entity.Article;

import java.util.List;

/**
 * Created by lastc on 26.02.2017.
 */
public interface ArticleService {
    List<Article> getAll();
    Article getById(long id);
    void delete(long id);
    Article save(Article article);
}
