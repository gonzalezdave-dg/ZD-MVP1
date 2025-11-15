// ZeroDay - Flashcard Retrieval for MVP Viewer

export default defineComponent({
  props: {
    domain: {
      type: "string",
      optional: true,
      label: "Domain",
    },
  },

  async run({ steps, $ }) {
    const formula = this.domain
      ? `Domain = "${this.domain}"`
      : "";

    const result = await $.airtable.list({
      baseId: process.env.AIRTABLE_BASE_ID,
      tableId: "Flashcards",
      filterByFormula: formula,
      maxRecords: 50
    });

    return result.records;
  },
});
