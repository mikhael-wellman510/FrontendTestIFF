import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { data } from "../data";
import { Button, ButtonGroup } from "@chakra-ui/react";
const SaveData = () => {
  console.log(data);
  const deleted = () => {
    console.log("heheh");
  };

  return (
    <>
      <div className="c">
        {data.map((data, idx) => (
          <div className="a">
            <Card>
              <CardBody>
                <div className="b">
                  <div>
                    <p>No :{data.no}</p>
                    <p>Nama :{data.nama} </p>
                    <p>Daftar Mapel : {data.mapel}</p>
                  </div>

                  <div className="da">
                    <Button
                      colorScheme="red"
                      size="xs"
                      onClick={() => deleted()}
                    >
                      Deleted
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default SaveData;
