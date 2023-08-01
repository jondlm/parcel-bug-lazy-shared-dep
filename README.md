# Parcel `--lazy` mode bug

Repro steps:

1. `pnpm install`
2. `pnpm run dev` aka `./node_modules/.bin/parcel serve --lazy`
3. open http://localhost:1234/a.html ✅
4. open http://localhost:1234/b.html ❌ fails with `Uncaught Error: Cannot find module '39ddc'`
5. open http://localhost:1234/b.html again ✅
