import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Campaign from "./Campaign";
import styles from "./Blog.module.css";
import "@testing-library/jest-dom";

vi.mock("./Blog.module.css", () => ({
  default: {
    campaign: "campaign",
    campaign__img: "campaign__img",
    campaign__img_container: "campaign__img-container",
    campaign__community_open: "campaign__community-open",
    campaign__btn_container: "campaign__btn-container",
    campaign__btn: "campaign__btn",
  },
}));

describe("Campaign", () => {
  it("renders main campaign image with correct attributes", () => {
    const { asFragment } = render(<Campaign />);

    expect(asFragment()).toMatchSnapshot();
  });
});
