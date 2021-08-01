

use std::ops::Mul;
use std::time::Duration;

use borsh::{BorshDeserialize, BorshSchema, BorshSerialize};
use sator_sdk::state::StateVersion;
use sator_sdk::types::{ApproximateSeconds, SignerPubkey, TokenAccountPubkey, TokenAmount};
use solana_program::clock::UnixTimestamp;
use solana_program::pubkey::Pubkey;


#[derive(Debug, BorshDeserialize, BorshSerialize, BorshSchema, Default)]
pub struct Winner {    
    pub wallet: Pubkey,
    pub points: u16,
    pub claimed: bool,
}