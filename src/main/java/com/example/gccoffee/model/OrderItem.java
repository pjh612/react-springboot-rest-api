package com.example.gccoffee.model;

import java.time.LocalDateTime;
import java.util.UUID;

public record OrderItem(long seq, UUID orderId, UUID productId, Category category, long price, int quantity,
                        LocalDateTime createdAt, LocalDateTime updatedAt) {
}

