//! Program owned state

use std::ops::Mul;
use std::time::Duration;

use borsh::{BorshDeserialize, BorshSchema, BorshSerialize};
use sator_sdk::state::StateVersion;
use sator_sdk::types::{ApproximateSeconds, SignerPubkey, TokenAccountPubkey, TokenAmount};
use solana_program::clock::UnixTimestamp;
use solana_program::pubkey::Pubkey;
use solana_program::{entrypoint::ProgramResult, program_error::ProgramError};




/// show reward pool, used to derive Show::token_account
#[repr(C)]
#[derive(Debug, BorshDeserialize, BorshSerialize, BorshSchema, Default)]
pub struct Show {    
    pub version: StateVersion,
    /// period after which user can claim reward
    pub lock_time: ApproximateSeconds,
    /// next quiz index
    pub index: u16,
    
    //  owner of the show
    pub owner: SignerPubkey,
}



/// derived from wallet + show
#[repr(C)]
#[derive(Debug, BorshDeserialize, BorshSerialize, BorshSchema, Default)]
pub struct UserKyk {        
    pub version: StateVersion,
}

#[derive(Debug, BorshDeserialize, BorshSerialize, BorshSchema, Default)]
pub struct Winner {    
    pub wallet: Pubkey,
    pub points: u16,
    pub claimed: bool,
}

/// Up to N winners with points, derived from show + counter. '
/// Prise pool is sum of tokens.
#[repr(C)]
#[derive(Debug, BorshDeserialize, BorshSerialize, BorshSchema, Default)]
pub struct Quiz {  
    pub version: StateVersion,      
    pub winnwers: [Winner; 5],
    pub locked_until: UnixTimestamp,
}


impl Show {
    pub const LEN: usize = 43;

    pub fn uninitialized(&self) -> ProgramResult {
        if self.version == StateVersion::Uninitialized {
            Ok(())
        } else {
            Err(ProgramError::AccountAlreadyInitialized)
        }
    }
    /// Error if not initialized
    pub fn initialized(&self) -> ProgramResult {
        if self.version != StateVersion::Uninitialized {
            Ok(())
        } else {
            Err(ProgramError::UninitializedAccount)
        }
    }
}

impl UserKyk {
    pub const LEN: usize = 1;
    pub fn uninitialized(&self) -> ProgramResult {
        if self.version == StateVersion::Uninitialized {
            Ok(())
        } else {
            Err(ProgramError::AccountAlreadyInitialized)
        }
    }
    /// Error if not initialized
    pub fn initialized(&self) -> ProgramResult {
        if self.version != StateVersion::Uninitialized {
            Ok(())
        } else {
            Err(ProgramError::UninitializedAccount)
        }
    }
}

impl Quiz {
    pub const LEN: usize = 184;
    pub fn uninitialized(&self) -> ProgramResult {
        if self.version == StateVersion::Uninitialized {
            Ok(())
        } else {
            Err(ProgramError::AccountAlreadyInitialized)
        }
    }
    /// Error if not initialized
    pub fn initialized(&self) -> ProgramResult {
        if self.version != StateVersion::Uninitialized {
            Ok(())
        } else {
            Err(ProgramError::UninitializedAccount)
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::state::*;    
    use borsh::*;

    #[test]
    fn test() {
        let data = Quiz::default().try_to_vec().unwrap();
        assert_eq!(data.len(), Quiz::LEN);
        let data = Show::default().try_to_vec().unwrap();
        assert_eq!(data.len(), Show::LEN);
        let data = UserKyk::default().try_to_vec().unwrap();
        assert_eq!(data.len(), UserKyk::LEN);
    }
}