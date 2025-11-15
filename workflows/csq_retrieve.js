// ZeroDay - Retrieve CSQ Questions

export default defineComponent({
  props: {
    domain: {
      type: "string",
      optional: true,
    },
  },

  async run({ steps, $ }) {
    const formula = this.domain
      ? `Domain = "${this.domain}"`
      : "";

    const result = await $.airtable.list({
      baseId: process.env.AIRTABLE_BASE_ID,
      tableId: "CSQ_Questions",
      filterByFormula: formula,
      maxRecords: 50
    });

    return result.records;
  },
});
