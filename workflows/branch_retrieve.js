// ZeroDay - Retrieve Branch Connections

export default defineComponent({
  props: {
    term: {
      type: "string",
      optional: true,
    }
  },

  async run({ steps, $ }) {
    const formula = this.term
      ? `Term = "${this.term}"`
      : "";

    const result = await $.airtable.list({
      baseId: process.env.AIRTABLE_BASE_ID,
      tableId: "Branches",
      filterByFormula: formula,
      maxRecords: 50
    });

    return result.records;
  },
});
