package com.russianidioms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Idiom {
    @Id
    private String id;
    private String idiom;
    private String english;
    private String example;
    private String description;

    public Idiom() {
    }

    public Idiom(String id, String idiom, String english, String example, String description) {
        this.id = id;
        this.idiom = idiom;
        this.english = english;
        this.example = example;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public String getIdiom() {
        return idiom;
    }

    public String getEnglishTranslation() {
        return english;
    }

    public String getExample() {
        return example;
    }

    public String getDescription() {
        return description;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setIdiom(String idiom) {
        this.idiom = idiom;
    }

    public void setEnglishTranslation(String meaning) {
        this.english = meaning;
    }

    public void setExample(String example) {
        this.example = example;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
