import React, { useState } from 'react';
import { Email, Box, Item, A } from 'react-html-email';

interface MyEmailProps {
  menuLinks: string[];
  menuLinksUrls: string[];
  handleSectionClick: (section: string) => void;
  image: string;
  backgroundColor: string;
  headerPadding: number;
  buttonLink: string;
  buttonText: string;
  headerBottomPadding: number;
  heroBottompadding: number;
}

const MyEmail: React.FC<MyEmailProps> = ({
  menuLinks,
  menuLinksUrls,
  handleSectionClick,
  image,
  backgroundColor,
  headerPadding,
  buttonText,
  buttonLink,
  headerBottomPadding,
  heroBottompadding,
}) => {
  const [title, setTitle] = useState('Write your title here');
  const [introduction, setIntroduction] = useState(
    'Start typing here and introduce your newsletter to your subscribers.'
  );
  const [additionalInfo, setAdditionalInfo] = useState(
    'When you want to add a new block, just grab one from the left-hand'
  );

  const handleInputChange = (
    event: React.FormEvent<HTMLDivElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(event.currentTarget.textContent || '');
  };

  return (
    <div style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <Email
        title="My Email"
        style={{
          width: '100%',
          maxWidth: '630px',
          margin: '0 auto',
          backgroundColor: `${backgroundColor}`,
        }}
      >
        <Box
          style={{
            minHeight: '80vh',
            padding: '16px',
            borderRadius: '8px',
            width: '100%',
          }}
        >
          {/* Header Section */}
          <div
            style={{ display: 'grid', placeItems: 'center' }}
            onClick={() => handleSectionClick('header')}
          >
            <Item>
              <table
                style={{
                  width: '100%',
                  textAlign: 'center',
                  margin: '0 auto',
                }}
              >
                <tbody>
                  <tr>
                    <td>
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        style={{
                          display: 'block',
                          paddingTop: headerPadding,
                          fontWeight: '600',
                          fontSize: '2rem',
                          color: 'revert',
                        }}
                      >
                        Company
                      </span>
                      <table style={{ margin: '0 auto', marginTop: '16px' }}>
                        <tbody>
                          <tr>
                            {menuLinks.map((link, index) => (
                              <td
                                key={index}
                                style={{
                                  padding: '0 10px',
                                  paddingBottom: headerBottomPadding,
                                }}
                              >
                                <A
                                  href={menuLinksUrls[index]}
                                  style={{
                                    display: 'inline-block',
                                    color: '#212121',
                                    textDecoration: 'none',
                                    padding: '8px',
                                    border: '1px solid #212121',
                                    borderRadius: '4px',
                                  }}
                                >
                                  {link}
                                </A>
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Item>
          </div>

          {/* Hero Section */}
          <div
            style={{ display: 'grid', placeItems: 'center' }}
            onClick={() => handleSectionClick('hero')}
          >
            <Item>
              <Box
                style={{
                  width: '100%',
                  height: '0',
                  marginTop: '30px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '8px',
                  position: 'relative',
                  paddingBottom: heroBottompadding,
                }}
              >
                <img src={image as string} width={"100%"} alt="Image" />
              </Box>
              <table
                style={{
                  width: '100%',
                  textAlign: 'center',
                  marginTop: '16px',
                }}
              >
                <tbody>
                  <tr>
                    <td>
                      <div
                        contentEditable
                        suppressContentEditableWarning
                        onChange={(e) => handleInputChange(e, setTitle)}
                        style={{
                          display: 'block',
                          marginTop: '16px',
                          width: '100%',
                          wordWrap: 'break-word',
                          outline: 'none',
                          fontSize: "1.5rem",
                        }}
                      >
                        {title}
                      </div>

                      <div
                        contentEditable
                        suppressContentEditableWarning
                        onChange={(e) => handleInputChange(e, setIntroduction)}
                        style={{
                          display: 'block',
                          marginTop: '8px',
                          width: '100%',
                          wordWrap: 'break-word',
                          outline: 'none',
                          fontSize: "1.1rem",
                        }}
                      >
                        {introduction}
                      </div>
                      <div
                        contentEditable
                        suppressContentEditableWarning
                        onChange={(e) => handleInputChange(e, setAdditionalInfo)}
                        style={{
                          display: 'block',
                          marginTop: '4px',
                          width: '100%',
                          wordWrap: 'break-word',
                          outline: 'none',
                          fontSize: "1.1rem",
                        }}
                      >
                        {additionalInfo}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                style={{
                  width: '100%',
                  textAlign: 'center',
                  marginTop: '4px',
                }}
              >
                <tbody>
                  <tr>
                    <td>
                      <A
                        href={buttonLink}
                        style={{
                          display: 'inline-block',
                          backgroundColor: 'rgb(205,0,0,0.95)',
                          color: '#fff',
                          textDecoration: 'none',
                          margin: "8px",
                          padding: '8px',
                          borderRadius: '4px',
                          // Cast to any to bypass type checking for msoHide
                          ...( { msoHide: "all" } as any )
                        }}
                      >
                        {buttonText}
                      </A>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Item>
          </div>
        </Box>
      </Email>
    </div>
  );
};

export default MyEmail;
