(function() {var implementors = {};
implementors["sator_stake_viewer"] = [{"text":"impl BorshSchema for <a class=\"struct\" href=\"sator_stake_viewer/instruction/struct.InitializeStakeInput.html\" title=\"struct sator_stake_viewer::instruction::InitializeStakeInput\">InitializeStakeInput</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a><a class=\"struct\" href=\"sator_stake_viewer/types/struct.Ranks.html\" title=\"struct sator_stake_viewer::types::Ranks\">Ranks</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 4]</a>: BorshSchema,&nbsp;</span>","synthetic":false,"types":["sator_stake_viewer::instruction::InitializeStakeInput"]},{"text":"impl BorshSchema for <a class=\"struct\" href=\"sator_stake_viewer/instruction/struct.LockInput.html\" title=\"struct sator_stake_viewer::instruction::LockInput\">LockInput</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>: BorshSchema,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: BorshSchema,&nbsp;</span>","synthetic":false,"types":["sator_stake_viewer::instruction::LockInput"]},{"text":"impl BorshSchema for <a class=\"struct\" href=\"sator_stake_viewer/instruction/struct.UnlockInput.html\" title=\"struct sator_stake_viewer::instruction::UnlockInput\">UnlockInput</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: BorshSchema,&nbsp;</span>","synthetic":false,"types":["sator_stake_viewer::instruction::UnlockInput"]},{"text":"impl BorshSchema for <a class=\"enum\" href=\"sator_stake_viewer/instruction/enum.Instruction.html\" title=\"enum sator_stake_viewer::instruction::Instruction\">Instruction</a>","synthetic":false,"types":["sator_stake_viewer::instruction::Instruction"]},{"text":"impl BorshSchema for <a class=\"enum\" href=\"sator_stake_viewer/state/enum.StateVersion.html\" title=\"enum sator_stake_viewer::state::StateVersion\">StateVersion</a>","synthetic":false,"types":["sator_stake_viewer::state::StateVersion"]},{"text":"impl BorshSchema for <a class=\"struct\" href=\"sator_stake_viewer/state/struct.ViewerStake.html\" title=\"struct sator_stake_viewer::state::ViewerStake\">ViewerStake</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"sator_stake_viewer/state/enum.StateVersion.html\" title=\"enum sator_stake_viewer::state::StateVersion\">StateVersion</a>: BorshSchema,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a><a class=\"struct\" href=\"sator_stake_viewer/types/struct.Ranks.html\" title=\"struct sator_stake_viewer::types::Ranks\">Ranks</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 4]</a>: BorshSchema,<br>&nbsp;&nbsp;&nbsp;&nbsp;Pubkey: BorshSchema,&nbsp;</span>","synthetic":false,"types":["sator_stake_viewer::state::ViewerStake"]},{"text":"impl BorshSchema for <a class=\"struct\" href=\"sator_stake_viewer/state/struct.ViewerLock.html\" title=\"struct sator_stake_viewer::state::ViewerLock\">ViewerLock</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"sator_stake_viewer/state/enum.StateVersion.html\" title=\"enum sator_stake_viewer::state::StateVersion\">StateVersion</a>: BorshSchema,<br>&nbsp;&nbsp;&nbsp;&nbsp;UnixTimestamp: BorshSchema,<br>&nbsp;&nbsp;&nbsp;&nbsp;UnixTimestamp: BorshSchema,<br>&nbsp;&nbsp;&nbsp;&nbsp;Pubkey: BorshSchema,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: BorshSchema,&nbsp;</span>","synthetic":false,"types":["sator_stake_viewer::state::ViewerLock"]},{"text":"impl BorshSchema for <a class=\"struct\" href=\"sator_stake_viewer/types/struct.Ranks.html\" title=\"struct sator_stake_viewer::types::Ranks\">Ranks</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>: BorshSchema,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>: BorshSchema,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: BorshSchema,&nbsp;</span>","synthetic":false,"types":["sator_stake_viewer::types::Ranks"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()