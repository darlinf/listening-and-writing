import "cypress-xpath";

describe("listening-and-writing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Frontpage can be opened", () => {
    cy.contains("push");

    //can be inserted text in input to practice
    cy.get("#text-to-push").type(
      `In this world, it's just us
    You know it's not the same as it was
    In this world, it's just us
    You know it's not the same as it was
    As it was, as it was 
    You know it's not the same`
    );
    cy.contains("push").click();

    //can be insert text in practice
    cy.xpath(`/html/body/div/div/div[2]/div[1]/div[2]/input`).type(
      "In this worldd it's us"
    );
    cy.xpath(`//*[@id="root"]/div/div[2]/div[1]/div[1]/div[1]`).click();
    //
    cy.xpath(`//*[@id="root"]/div/div[2]/div[1]/div[1]/div[1]`);
    cy.xpath(`//*[@id="root"]/div/div[2]/div[1]/div[2]/div/div`);

    //have class word-text-result
    cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div[1]/div[1]/span[1]').should(
      "have.class",
      "word-text-result"
    );

    //have class word-result-good
    cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div[2]/div/div/span[1]').should(
      "have.class",
      "word-result-good"
    );

    //have class word-result-bad
    cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div[2]/div/div/span[3]').should(
      "have.class",
      "word-result-bad"
    );

    //speech text
    cy.xpath(`//*[@id="root"]/div/div[2]/div[1]/div[1]/div[2]`).click();
    cy.get(`#stop-speak`);

    cy.get("#stop-speak", { timeout: 10000 }).should("not.exist");

    //speech text by word
    cy.xpath(
      `//*[@id="root"]/div/div[2]/div[1]/div[1]/div[3]/span/div`
    ).click();
    cy.get(`#stop-speak-by-word`);
  });
});
