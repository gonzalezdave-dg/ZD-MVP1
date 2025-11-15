# ZD-MVP1

# ZeroDay MVP1 – Priority TODO List

## 🟥 BACKLOG (Do NOT start until MVP1 ships)
- [ ] User login + auth
- [ ] Dark / Cyber theme toggle
- [ ] Weak-areas auto-review
- [ ] Daily streaks & gamification
- [ ] Community chat / AI moderation
- [ ] Advanced analytics dashboard
- [ ] Databricks enrichment pipeline
- [ ] Achievement badges
- [ ] Graph-based Branch visualization
- [ ] Calendar / study planner UI
- [ ] Full UI animation polish
- [ ] Real company scenario expansion

---

## 🟧 TO DO (Top Priority — Core MVP Work)
### Content Creation
- [ ] Create 50 flashcards (Domain 1 only)
- [ ] Create 20–30 CSQ v8 questions (Domain 1 only)
- [ ] Create 10–15 Branch connections for key D1 concepts
- [ ] Validate flashcard format (definition, bullets, example)
- [ ] Validate CSQ format (signals, pitfalls, mindset, explanation)

### Data Structures (Airtable)
- [ ] Create Airtable table: Flashcards
- [ ] Create Airtable table: CSQ_Questions
- [ ] Create Airtable table: Branches
- [ ] Add fields for thumbs-up / thumbs-down tracking

### Workflows (Pipedream)
- [ ] Pipedream workflow: CSQ parser → Airtable insert
- [ ] Workflow: Flashcard retrieval → frontend
- [ ] Workflow: Question retrieval → frontend
- [ ] Workflow: Branch retrieval → frontend
- [ ] Add debug logging for empty fields and parser errors

---

## 🟨 IN PROGRESS
### Frontend UI
- [ ] Build “Domain Selection” screen (Domain 1 enabled)
- [ ] Build “Mode Selection” screen (Flashcards / Questions / Branches)
- [ ] Build Flashcard viewer (flip + thumbs rating)
- [ ] Build CSQ viewer (A–D choices + explanation reveal)
- [ ] Build Branch viewer (simple expandable list)

### Stability / Debugging
- [ ] Fix Airtable MULTIPLE_CHOICE_OPTIONS errors
- [ ] Fix undefined `$return_value` parser bug
- [ ] Add structured debug output in Pipedream

---

## 🟩 READY FOR TEST
- [ ] Test Flashcard flow end-to-end
- [ ] Test CSQ flow end-to-end
- [ ] Test Branches view end-to-end
- [ ] Validate Airtable read/write
- [ ] Test mobile responsiveness
- [ ] Verify thumbs-up/down persistence
- [ ] Run 5 random CSQs for correctness checks

---

## 🟦 DONE
*(Move tasks here as they’re completed — keep momentum visible)*
- [ ] Finalize CSQ v8 format
- [ ] Finalize flashcard format
- [ ] Create Branches schema structure
- [ ] Verify Airtable API connection
- [ ] Base Pipedream workflows created
- [ ] Added initial debug logs

---

## 🟪 BLOCKED
- [ ] Airtable permissions preventing option creation
- [ ] Pipedream step failing due to null/undefined values
- [ ] Frontend build failing for deployment
- [ ] API throttling or rate limit issues

---

## 🟫 TRASH (Not part of MVP1)
- [ ] Steve Jobs menu redesign (future)
- [ ] Fancy animations
- [ ] Marketing campaigns
- [ ] CISSP voucher giveaway setup
- [ ] Real-company incident scenarios
- [ ] Branding redesigns
- [ ] Leaderboards / points system
