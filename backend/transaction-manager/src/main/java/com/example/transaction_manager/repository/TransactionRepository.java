package com.example.transaction_manager.repository;

import com.example.transaction_manager.modele.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
