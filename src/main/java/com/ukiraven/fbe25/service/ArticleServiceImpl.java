package com.ukiraven.fbe25.service;

import com.ukiraven.fbe25.entity.Article;
import com.ukiraven.fbe25.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by lastc on 26.02.2017.
 */
@Service
public class ArticleServiceImpl implements ArticleService {
    @Autowired
    private ArticleRepository repository;

    @Override
    public List<Article> getAll() {
        return repository.findAll();
    }

    @Override
    public Article getById(long id) {
        return repository.getOne(id);
    }

    @Override
    public void delete(long id) {
        repository.delete(id);
    }

    @Override
    public Article save(Article article) {
        return repository.saveAndFlush(article);
    }
}
