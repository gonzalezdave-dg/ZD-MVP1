// ZeroDay - Flashcard Parser
// Converts a structured Flashcard into the Airtable "Flashcards" table.

export default defineComponent({
  props: {
    flashcard_raw: {
      type: "object",
      label: "Flashcard Raw Output"
    },
  },

  async run({ steps, $ }) {
    const fc = this.flashcard_raw;

    // Debugging output
    console.log("=== FLASHCARD PARSER DEBUG START ===");
    for (const [key, value] of Object.entries(fc)) {
      if (!value || value === "") {
        console.log(`⚠️ EMPTY FIELD: ${key}`);
      } else {
        console.log(`${key}: ${JSON.stringify(value)}`);
      }
    }
    console.log("=== FLASHCARD PARSER DEBUG END ===");

    // Format fields according to Airtable schema
    const flashcardRecord = {
      ID: fc.ID || "",
      Domain: fc.Domain || "",
      Term: fc.Term || "",
      Definition: fc.Definition || "",
      Bullets: Array.isArray(fc.Bullets) ? fc.Bullets.join("\n") : fc.Bullets || "",
      Example: fc.Example || "",
      Tags: Array.isArray(fc.Tags) ? fc.Tags.join(", ") : fc.Tags || "",
      UserRating: fc.UserRating || ""
    };

    // Insert into Airtable
    const result = await $.airtable.insert({
      baseId: process.env.AIRTABLE_BASE_ID,
      tableId: "Flashcards",
      fields: flashcardRecord
    });

    return result;
  }
});
