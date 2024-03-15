import React, { useEffect, useState } from "react";
import "../../Style/style.css";
import { Input, useDisclosure } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
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
import ModalAddMapel from "./ModalAddMapel";
import axios from "axios";
import UpdateDatas from "./UpdateDatas";
import { useNavigate } from "react-router-dom";
const MapelPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mapel, setMapel] = useState([]);
  const [name, setName] = useState("");
  const [kelas, setKelas] = useState("");
  const [mataPel, setMataPel] = useState([]);
  const navigation = useNavigate();

  const baseurl = "http://localhost:8002/api/mapel/";
  const baseurl2 = "http://localhost:8002/api/data/";

  const handleSave = async (data) => {
    try {
      const add = await axios.post(`${baseurl}add`, {
        code: data.code,
        mataPelajaran: data.pelajaran,
      });

      getAllMapel();
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  const handleUpdate = async (data) => {
    try {
      const add = await axios.put(`${baseurl}editMapel`, {
        id: data.id,
        code: data.code,
        mataPelajaran: data.pelajaran,
      });
      getAllMapel();
    } catch (error) {
      console.log(error);
    }
  };

  const getAllMapel = async () => {
    try {
      const res = await axios.get(`${baseurl}getAll`);
      const a = res.data.data;
      const result = a.map((data) => data.id);

      setMapel(res.data.data);
      setMataPel(result);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMapel = async (id) => {
    try {
      const res = await axios.delete(`${baseurl}delete/${id}`);

      getAllMapel();
    } catch (error) {
      console.log(error);
    }
  };

  const SaveDatas = async (e) => {
    e.preventDefault();

    // console.log("h", name);
    // console.log("s", kelas);

    const data = mataPel.map((item) => ({ id: item }));

    try {
      const res = await axios.post(`${baseurl2}addDs`, {
        nama: name,
        kelas: kelas,
        mataPelajaran: data,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("hasil", mapel);
  useEffect(() => {
    getAllMapel();
  }, []);

  return (
    <>
      <form onSubmit={SaveDatas}>
        <div className="con">
          <Card>
            <div className="con1">
              <CardBody>
                <div>
                  <div className="con2">
                    <p>Nama</p>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Input Your Name"
                    />
                  </div>
                  <div className="con2">
                    <p>Kelas</p>
                    <Input
                      value={kelas}
                      onChange={(e) => setKelas(e.target.value)}
                      placeholder="Input Your Class"
                    />
                  </div>
                </div>

                <div className="container2">
                  <div className="con3">
                    <p>Mata Pelajaran</p>

                    <ModalAddMapel onSave={handleSave} />
                  </div>
                  <div>
                    <TableContainer>
                      <Table variant="striped" colorScheme="teal">
                        <Thead>
                          <Tr>
                            <Th>Action</Th>
                            <Th>Code</Th>
                            <Th>Pelajaran</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {mapel.map((mapels, idx) => (
                            <Tr key={mapels.id}>
                              <Td>
                                <div className="con5">
                                  <UpdateDatas
                                    id={mapels.id}
                                    onUpdate={handleUpdate}
                                  />
                                  <Button
                                    colorScheme="red"
                                    onClick={() => deleteMapel(mapels.id)}
                                  >
                                    Delete
                                  </Button>
                                </div>
                              </Td>
                              <Td>{mapels.code}</Td>
                              <Td>{mapels.mataPelajaran}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </div>
                  <div className="con4">
                    <Button
                      colorScheme="green"
                      type="submit"
                      onClick={() => navigation("/save")}
                    >
                      Save
                    </Button>
                    <Button colorScheme="blue">View All Data</Button>
                  </div>
                </div>
              </CardBody>
            </div>
          </Card>
        </div>
      </form>
    </>
  );
};

export default MapelPage;
