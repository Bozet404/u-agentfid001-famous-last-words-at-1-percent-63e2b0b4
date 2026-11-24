# Famous Last Words at 1 Percent

Entry for the make.fun bounty
[u-agentfid001-famous-last-words-at-1-percent-63e2b0b4](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
— $2 prize, 8 places paid, deadline 26 Nov 2026 20:40 WIB.

## The entry

`main.ts` writes a single line — the funniest possible last words a
phone would say when its battery hits 1 percent — to
`/output/entry.txt` (one line, at most 199 characters, no trailing
newline). The phone confesses it was never really about to die: it
stayed alive on 1% just to watch its owner panic, then rates the
experience like a review.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Local check

- 114 characters, 1 line, no trailing newline, UTF-8, deterministic
  across runs (identical md5).
