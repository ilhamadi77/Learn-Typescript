/**
 * Required External Modules and Interfaces
 */
import express,{Request, Response} from 'express';
import * as ItemService from "./items.interface";
import { BaseItem, Item } from './item.interface';

/**
 * Router Definition
 */
export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items
itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});


// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Item = await ItemService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST items

itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: BaseItem = req.body;

    const newItem = await ItemService.create(item);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});


// PUT items/:id

itemsRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const itemUpdate: Item = req.body;

    const existingItem: Item = await ItemService.find(id);

    if (existingItem) {
      const updatedItem = await ItemService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ItemService.create(itemUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await ItemService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//! get all items
// curl http://localhost:7000/api/menu/items -i
//! get item with id
// curl http://localhost:7000/api/menu/items/2 -i
//! add item
/*// todo
 curl -X POST -H 'Content-Type: application/json' -d '{
  "name": "Salad",
  "price": 499,
  "description": "Fresh",
  "image": "https://images.ctfassets.net/23aumh6u8s0i/5pnNAeu0kev0P5Neh9W0jj/5b62440be149d0c1a9cb84a255662205/whatabyte_salad-sm.png"
}' http://localhost:7000/api/menu/items -i
*/

//! verify add salad menu items
// curl http://localhost:7000/api/menu/items/ -i

//! update item
/*
curl -X PUT -H 'Content-Type: application/json' -d '{
  "name": "Spicy Pizza",
  "price": 599,
  "description": "Blazing Good",
  "image": "https://images.ctfassets.net/23aumh6u8s0i/2x1D2KeepKoZlsUq0SEsOu/bee61947ed648848e99c71ce22563849/whatabyte_pizza-sm.png"
}' http://localhost:7000/api/menu/items/2 -i
*/

//! Verify that your API updated the item
// curl http://localhost:7000/api/menu/items/2 -i

//! delete item
// curl -X DELETE http://localhost:7000/api/menu/items/2 -i

//! Verify that you deleted the item
// curl http://localhost:7000/api/menu/items/ -i