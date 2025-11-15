// ZeroDay - Flashcard Insert Workflow

export default defineComponent({
  props: {
    flashcard: {
      type: "object",
      label: "Flashcard Object",
    },
  },

  async run({ steps, $ }) {
    const card = this.flashcard;

    console.log("=== FLASHCARD INSERT DEBUG ===");
    console.log(JSON.stringify(card, null, 2));

    const result = await $.airtable.insert({
      baseId: process.env.AIRTABLE_BASE_ID,
      tableId: "Flashcards",
      fields: card
    });

    return result;
  },
});
