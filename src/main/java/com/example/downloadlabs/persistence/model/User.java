package com.example.downloadlabs.persistence.model;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Builder
@Entity
@Table(name = "person")
public class User extends AbstractEntity {

    @Column(unique = true, nullable = false)
    private String password;

    @Column(unique = true, nullable = false)
    private String email;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    @Column(name = "role_id")
    private Set<Role> roles;

}
