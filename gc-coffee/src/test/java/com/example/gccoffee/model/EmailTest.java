package com.example.gccoffee.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class EmailTest {

    @Test
    public void testInvalidEmail() {
        assertThrows(IllegalArgumentException.class , ()-> {
            var email = new Email("acccccc");
        });
    }

    @Test
    public void testValidEmail() {
        var email = new Email("pjh_jn@naver.com");
        assertTrue(email.getAddress()=="pjh_jn@naver.com");
    }

    @Test
    public void testEqEmail() {
        var email = new Email("pjh_jn@naver.com");
        var email2 = new Email("pjh_jn@naver.com");

        assertEquals(email, email2);
    }
}