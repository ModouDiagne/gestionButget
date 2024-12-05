package com.example.transaction_manager.modele;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;
    private String type; // "revenu" ou "dépense"
    private Double amount;
    private String date;
}
