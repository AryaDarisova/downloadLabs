package com.example.downloadlabs.persistence.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "role")
public class Role extends AbstractEntity implements GrantedAuthority {

    @Column(unique = true)
    private String name;

    @Override
    public String getAuthority() {
        return name;
    }
}
