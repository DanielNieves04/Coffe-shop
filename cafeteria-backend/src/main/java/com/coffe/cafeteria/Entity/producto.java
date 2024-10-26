/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.coffe.cafeteria.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "producto")
@Data //Get y set
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class producto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idProducto;
    private String nombre;
    private String descipcion;
    @Lob
    private byte[] foto;
}
