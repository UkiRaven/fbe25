package com.ukiraven.fbe25.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.hateoas.core.Relation;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by lastc on 26.02.2017.
 */

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String title;
    private String content;
    private Date creationDate;

    @ManyToOne
//    @JoinColumn(name = "author_id", nullable = false)
    private Account author;

    public Article() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Account getAuthor() {
        return author;
    }

    public void setAuthor(Account author) {
        this.author = author;
    }
}
