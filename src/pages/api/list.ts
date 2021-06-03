import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../util/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { data, error } = await supabase
      .from("List")
      .insert([JSON.parse(req.body)]);
    if (data) {
      res.status(200).json({ state: "OK" });
    }
    if (error) {
      res.status(500).json({ state: "error" });
    }
  }

  if (req.method === "GET") {
    let { data: List, error } = await supabase
      .from("List")
      .select("id,name,state");
    if (List) {
      res.status(200).json(List);
    } else {
      res.status(500).json([]);
    }
  }

  if (req.method === "PUT") {
    type data = {
      id: number;
      state: boolean;
    };
    const data: data = JSON.parse(req.body);
    const { data: List, error } = await supabase
      .from("List")
      .update({ state: data.state })
      .eq("id", data.id);
    if (List) {
      res.status(200).json({ state: "OK" });
    }
    if (error) {
      res.status(500).json({ state: "error" });
    }
  }

  if (req.method === "DELETE") {
    type data = {
      id: number;
    };
    const data: data = JSON.parse(req.body);
    const { data: List, error } = await supabase
      .from("List")
      .delete()
      .eq("id", data.id);
    if (List) {
      res.status(200).json({ state: "OK" });
    }
    if (error) {
      res.status(500).json({ state: "error" });
    }
  }
}
