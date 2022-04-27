package com.example.gccoffee.model;

import java.time.LocalDateTime;
import java.util.UUID;

public class Product<Category> {
    private final UUID id;
    private String name;
    private Category category;
    private long price;
    private String description;
    private final LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Product(UUID id, String name, Category category, long price) {
        this.id =id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.createdAt = LocalDateTime.now().withNano(0);
        this.updatedAt = LocalDateTime.now().withNano(0);
    }

    public Product(UUID id, String name, Category category, long price, String description, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Category getCategory() {
        return category;
    }

    public long getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setName(String name) {
        this.name = name;
        updatedAt = LocalDateTime.now().withNano(0);
    }

    public void setCategory(Category category) {
        this.category = category;
        updatedAt = LocalDateTime.now().withNano(0);
    }

    public void setPrice(long price) {
        this.price = price;
        updatedAt = LocalDateTime.now().withNano(0);
    }

    public void setDescription(String description) {
        this.description = description;
        updatedAt = LocalDateTime.now().withNano(0);
    }
}
