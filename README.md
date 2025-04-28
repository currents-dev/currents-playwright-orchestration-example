# Improving Playwright Sharding - Currents Orchestration Example

[Demo video](https://www.loom.com/share/e2a4ec0167d74e69b9f07d45707cf0f4?sid=b003d756-0e5d-400d-b2a8-3279b63804f2)

Available in the recent beta version `npm i @currents/playwright@beta` (`@currents/playwright@1.30.0-beta.0`)

### Configuring Batch Size

It is recommended to set `batchSize = workers`

- Use `--pwc-batch-size` CLI params, e.g.: `pwc-p --pwc-batch-size=3`
- Set environment variable `CURRENTS_BATCH_SIZE` e.g.: `CURRENTS_BATCH_SIZE=3`
- Set the values in `currents.confg.ts`, e.g.: `orchestration.batchSize: 3`

### Suite Composition

- 40 long-running tests: 110-120s
- 40 short tests: 10-30s

### Playwright Sharding

- workers: 2
- machines: 5
- overall duration: **15m 38s**

![currents-2025-04-28-14 36 40@2x](https://github.com/user-attachments/assets/d9880a27-5c8f-4841-b513-a092932d3937)

### Currents Batched Orchestration

- batch size: 3
- workers: 3
- machines: 5
- overall duration: **9m 17s** (~41% improvement)

![currents-2025-04-28-14 33 58@2x](https://github.com/user-attachments/assets/8794c0f4-a8dc-4dfd-8c09-283ea5f8b182)
