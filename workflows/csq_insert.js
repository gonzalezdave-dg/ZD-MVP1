// ZeroDay - CSQ Insert Workflow
// Inserts a fully prepared CSQ record into the Airtable "CSQ_Questions" table.

export default defineComponent({
  props: {
    csq: {
      type: "object",
      label: "CSQ Object",
    },
  },

  async run({ steps, $ }) {
    const q = this.csq;

    console.log("=== CSQ INSERT DEBUG START ===");
    console.log(JSON.stringify(q, null, 2));
    console.log("=== CSQ INSERT DEBUG END ===");

    // Push to Airtable
    const result = await $.airtable.insert({
      baseId: process.env.AIRTABLE_BASE_ID,
      tableId: "CSQ_Questions",
      fields: {
        ID: q.ID,
        Domain: q.Domain,
        Scenario: q.Scenario,
        Question: q.Question,
        OptionA: q.OptionA,
        OptionB: q.OptionB,
        OptionC: q.OptionC,
        OptionD: q.OptionD,
        CorrectAnswer: q.CorrectAnswer,
        Explanation: q.Explanation,
        Pitfall: q.Pitfall,
        Mindset: q.Mindset
      }
    });

    return result;
  },
});
