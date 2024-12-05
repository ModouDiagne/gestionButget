package com.example.transaction_manager.service;

import com.example.transaction_manager.modele.Transaction;
import com.example.transaction_manager.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository repository;

    public List<Transaction> getAllTransactions() {
        return repository.findAll();
    }

    public Transaction createTransaction(Transaction transaction) {
        return repository.save(transaction);
    }

    public Optional<Transaction> getTransactionById(Long id) {
        return repository.findById(id);
    }

    public Transaction updateTransaction(Long id, Transaction updatedTransaction) {
        return repository.findById(id).map(transaction -> {
            transaction.setDescription(updatedTransaction.getDescription());
            transaction.setType(updatedTransaction.getType());
            transaction.setAmount(updatedTransaction.getAmount());
            transaction.setDate(updatedTransaction.getDate());
            return repository.save(transaction);
        }).orElseThrow(() -> new RuntimeException("Transaction non trouvée"));
    }

    public void deleteTransaction(Long id) {
        repository.deleteById(id);
    }
}
