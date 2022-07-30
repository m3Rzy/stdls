package com.myliss.myliss.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Pupil")
public class Pupil {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String surname;
    private String phone;
    private String email;
    private int cost;
    private int grade;
    private String parent;
    private String parent_number;
    private String rate;
}
