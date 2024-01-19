#!/bin/bash

set -eoux

ulimit -s unlimited
./stark_verify /mnt/input.json output.wtns
rapidsnark stark_verify_final.zkey output.wtns proof.json public.json
