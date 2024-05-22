﻿using PI.Domain.Models;

namespace PI.Domain.Services 
{
    public interface ITractionService 
    {
        Task<Traction> SaveTraction(TractionDto traction);
    }
}
