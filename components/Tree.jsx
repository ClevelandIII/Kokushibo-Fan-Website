import { useEffect, useRef } from "react";
import * as f3 from "family-chart";
import "family-chart/styles/family-chart.css";

const Tree = () => {
    const chartRef = useRef(null);
    const chartRef2 = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const data = [
                {
                    id: "1",
                    data: {
                        "first name": "Father",
                        gender: "M",
                    },
                    rels: { spouses: ["2"], children: ["3", "4"] },
                },
                {
                    id: "2",
                    data: {
                        "first name": "Akeno",
                        gender: "F",
                    },
                    rels: { spouses: ["1"], children: ["3", "4"] },
                },
                {
                    id: "3",
                    data: {
                        "first name": "Michikatsu",
                        gender: "M",
                    },
                    rels: {
                        spouses: ["5"],
                        parents: ["1", "2"],
                        children: ["6", "7"],
                    },
                },
                {
                    id: "4",
                    data: {
                        "first name": "Yoriichi",
                        gender: "M",
                    },
                    rels: {
                        spouses: ["8"],
                        parents: ["1", "2"],
                        children: ["9"],
                    },
                },
                {
                    id: "5",
                    data: {
                        "first name": "Spouse",
                        gender: "F",
                    },
                    rels: {
                        spouses: ["3"],
                        parents: ["1", "2"],
                        children: ["6", "7"],
                    },
                },
                {
                    id: "6",
                    data: {
                        "first name": "Son",
                        gender: "M",
                    },
                    rels: { parents: ["3", "5"] },
                },
                {
                    id: "7",
                    data: {
                        "first name": "Child",
                    },
                    rels: { parents: ["3", "5"] },
                },
                {
                    id: "8",
                    data: {
                        "first name": "Uta",
                        gender: "F",
                    },
                    rels: { spouses: ["4"], children: ["9"] },
                },
                {
                    id: "9",
                    data: {
                        "first name": "Unborn Child",
                    },
                    rels: { parents: ["4", "8"] },
                },
                {
                    id: "10",
                    data: {
                        "first name": "Father",
                        gender: "M",
                    },
                    rels: { spouses: ["11"] },
                },
                {
                    id: "11",
                    data: {
                        "first name": "Mother",
                        gender: "F",
                    },
                    rels: { spouses: ["10"] },
                },
            ];

            const f3Chart = f3.createChart("#FamilyChart", data);

            f3Chart
                .setCardHtml()
                .setCardDisplay([["first name", "last name"], ["birthday"]]);

            f3Chart.updateTree({ initial: true });
        }
    }, []);

    useEffect(() => {
        if (chartRef2.current) {
            const data2 = [
                {
                    id: "1",
                    data: {
                        "first name": "Father",
                        gender: "M",
                    },
                    rels: { spouses: ["2"], children: ["3", "4"] },
                },
                {
                    id: "2",
                    data: {
                        "first name": "Mother",
                        gender: "F",
                    },
                    rels: { spouses: ["1"], children: ["3", "4"] },
                },
                {
                    id: "3",
                    data: {
                        "first name": "Yuichiro",
                        gender: "M",
                    },
                    rels: {
                        parents: ["1", "2"],
                    },
                },
                {
                    id: "4",
                    data: {
                        "first name": "Muichiro",
                        gender: "M",
                    },
                    rels: {
                        parents: ["1", "2"],
                    },
                },
            ];

            const f3Chart2 = f3.createChart("#FamilyChart2", data2);

            f3Chart2
                .setCardHtml()
                .setCardDisplay([["first name", "last name"], ["birthday"]]);

            f3Chart2.updateTree({ initial: true });
        }
    }, []);

    return (
        <>
            <div
                className="f3"
                id="FamilyChart"
                ref={chartRef}
                style={{
                    width: "80%",
                    height: "20vw",
                    margin: "auto",
                    color: "#fff",
                }}
            />
            <div
                className="f3"
                id="FamilyChart2"
                ref={chartRef2}
                style={{
                    width: "80%",
                    height: "12vw",
                    margin: "auto",
                    color: "#fff",
                }}
            />
        </>
    );
};

export default Tree;
