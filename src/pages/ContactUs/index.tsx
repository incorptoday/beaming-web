import { Fragment } from 'react';
import { Button, Form, Input, message } from 'antd';
import HTTP from '../../core/http';

const { TextArea } = Input;

const ContactUs = () => {
  const [form] = Form.useForm();

  const resetForm = () => {
    form.resetFields();
  }

  const onSubmit = async (values: any) => {
    const valid = await form.validateFields();
    if (!valid) return;

    try {
      await HTTP.post('/contact', values);
      message.success('Thank you for reaching out! Someone will be in touch with you shortly.');
      resetForm();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Fragment>
      <div className="contact-us">
        <div className="contact-us__content">
          <h3>Contact Us</h3>
        </div>

        <div className="contact-us__form">
          <Form
            name="basic"
            onFinish={onSubmit}
            autoComplete="off"
            layout="vertical"
            className="default"
            form={form}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: 'First name is required' },
                { min: 2, message: 'First name must be at least 2 characters' },
                { max: 100, message: 'First name must be no more than 100 characters' }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: 'Last name is required' },
                { min: 2, message: 'Last name must be at least 2 characters' },
                { max: 100, message: 'Last name must be no more than 100 characters' }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Email is required' },
                { pattern: new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), message: 'Please enter valid email' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                { required: true, message: 'Message is required' },
              ]}
            >
              <TextArea />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Fragment>
  )
}

export default ContactUs;