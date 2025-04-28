# currents-playwright-orchestration-example

[Demo video](https://www.loom.com/share/5d701526d61b4ce383a2d79faa350731?sid=3121101c-5453-4b9d-afd1-8c8749e7d458)

Available in the recent beta version `npm i @currents/playwright@beta` (`@currents/playwright@1.30.0-beta.0`) 

### Configuring Batch Size

It is recommended to set `batchSize = workers`
- Use `--pwc-batch-size` CLI params, e.g.: `pwc-p --pwc-batch-size=3`
- Set environment variable `CURRENTS_BATCH_SIZE` e.g.: `CURRENTS_BATCH_SIZE=3`
- Set the values in `currents.confg.ts`, e.g.: `orchestration.batchSize: 3`

### Suite Composition

- 20% long-running tests: 1.5-2m
- 30% mid-size tests: 45-90s
- 50% short tests: 10-45s


### Playwright Sharding
- workers: 3
- machines: 5
- overall duration: **7m 17s**

![currents-2025-04-28-14 36 40@2x](https://github.com/user-attachments/assets/d9880a27-5c8f-4841-b513-a092932d3937)


### Currents Batched Orchestration
- batch size: 3
- workers: 3
- machines: 5
- overall duration: **6m 44s**

![currents-2025-04-28-14 33 58@2x](https://github.com/user-attachments/assets/8794c0f4-a8dc-4dfd-8c09-283ea5f8b182)
