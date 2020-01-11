import React, { Component } from "react";
import "../Styles/style.css";
import {
  Form,
  Input,
  DatePicker,
  Select,
  Typography,
  Row,
  Col,
  Button
} from "antd";
const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;
const InputGroup = Input.Group;
function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

export default class RegistrasiComponents extends Component {
  state = {
    loading: false
  };
  enterLoading = () => {
    this.setState({ loading: true });
  };
  render() {
    return (
      <div className="form-group">
        <Title style={{ textAlign: "center" }} level={1}>
          Registrasi
        </Title>
        <Form>
          <Form.Item label="Nama Lengkap">
            <Input size="large" placeholder="Nama Lengkap" />
          </Form.Item>
          <Form.Item label="Tanggal Lahir">
            <DatePicker size="large" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Jenis Kelamin">
            <Select
              placeholder="Pilih Jenis Kelamin"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              size="large"
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="laki-laki">Laki-Laki</Option>
              <Option value="perempuan">Perempuan</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Alamat">
            <Input size="large" placeholder="Alamat" />
          </Form.Item>
          <div className="job-experience">
            <Title level={3}>Pengalaman Kerja</Title>
            <Form.Item label="Posisi">
              <Input
                size="large"
                placeholder="Contoh : 'Pegawai Negeri Sipil'"
              />
            </Form.Item>
            <InputGroup size="large">
              <Row>
                <Col span={12}>
                  <Form.Item label="Nama Perusahaan">
                    <Input
                      placeholder="Contoh : 'PT.Krafthaus Indonesia'"
                      size="large"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Bulan / Tahun">
                    <DatePicker size="large" style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
              </Row>
            </InputGroup>
            <Form.Item label="Deskripsi Singkat">
              <TextArea rows={4} />
            </Form.Item>
          </div>
          <Button
            style={{ fontSize: "20px" }}
            icon="save"
            type="primary"
            loading={this.state.loading}
            onClick={this.enterLoading}
          >
            Simpan
          </Button>
        </Form>
      </div>
    );
  }
}
