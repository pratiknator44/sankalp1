import { Container, Button, Dropdown } from "react-bootstrap";
export default function HomeFiltersComponent() {
    return (
        <Container>
            <div className="d-flex">
                <div className="w-25">Filters</div>
                <div className="border-bottom">
                    <Dropdown>
                        <Dropdown.Toggle variant="white" id="dropdown-basic">
                            Occasion / Event
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Birthday</Dropdown.Item>
                            <Dropdown.Item>Wedding</Dropdown.Item>
                            <Dropdown.Item>New Year</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="w-25 border-bottom">
                    <Dropdown>
                        <Dropdown.Toggle variant="white" id="dropdown-basic">
                            Media type
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Image</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Short Video</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">GIF</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <Button>Apply</Button>
                </div>
            </div>
        </Container>
    );
}