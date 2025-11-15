// ZeroDay - Branch Insert Workflow
// Inserts a Branch (concept connection) record into the Airtable "Branches" table.

export default defineComponent({
  props: {
    branch: {
      type: "object",
      label: "Branch Object",
    },
  },

  async run({ steps, $ }) {
    const b = this.branch;

    console.log("=== BRANCH INSERT DEBUG START ===");
    console.log(JSON.stringify(b, null, 2));
    console.log("=== BRANCH INSERT DEBUG END ===");

    const result = await $.airtable.insert({
      baseId: process.env.AIRTABLE_BASE_ID,
      tableId: "Branches",
      fields: {
        ID: b.ID,
        Term: b.Term,
        Related1: b.Related1,
        Related2: b.Related2,
        Related3: b.Related3,
        Explanation: b.Explanation
      }
    });

    return result;
  },
});
