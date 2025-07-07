/*
See https://docs.rs/cortex-m-rt/latest/cortex_m_rt/#memoryx
See https://jlcpcb.com/api/file/downloadByFileSystemAccessId/8576163259906785280 page 50
*/

MEMORY
{
  /* K = 1024 bytes */
  FLASH (rx): ORIGIN = 0x08000000, LENGTH = 256K /* 0x0800_0000 ~ 0x0803_FFFF */
  RAM  (rwx): ORIGIN = 0x20000000, LENGTH = 64K  /* 0x2000_0000 ~ 0x2000_FFFF */
}

_stack_start = ORIGIN(RAM) + LENGTH(RAM);
